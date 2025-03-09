import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  console.log('Fetching posts...')
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Posts fetched successfully:', data.length, 'posts')
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

function PostsComponent() {
  console.log('PostsComponent rendering')
  
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    status,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry: 3,
    cacheTime: 1000 * 60 * 30, // Cache will be garbage collected after 30 minutes
    staleTime: 1000 * 60 * 5,  // Data remains fresh for 5 minutes
    refetchOnWindowFocus: true, // Auto refetch when window regains focus
    keepPreviousData: true,    // Keep showing old data while fetching new data
    onError: (error) => {
      console.error('Query error:', error)
    },
    onSuccess: (data) => {
      console.log('Query successful, received:', data?.length, 'posts')
    },
  })

  console.log('Current query state:', { status, isLoading, isError, isFetching })

  if (isLoading) {
    console.log('Rendering loading state')
    return <div>Loading posts...</div>
  }

  if (isError) {
    console.log('Rendering error state:', error)
    return (
      <div>
        <div>Error: {error.message}</div>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2>Posts ({posts?.length || 0})</h2>
        <button
          onClick={() => {
            console.log('Manual refetch triggered')
            refetch()
          }}
          disabled={isFetching}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
      </div>

      <div>
        {posts?.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsComponent
