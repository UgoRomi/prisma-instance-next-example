import prisma from '../../lib/prisma';

async function getData() {
  try {
    const posts = await prisma.post.findMany();
    return { posts };
  } catch (error) {
    console.log(error);
    throw new Error(
      'There was an error fetching the posts. Please refresh the page.'
    );
  }
}

export default async function Home() {
  const { posts } = await getData();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
