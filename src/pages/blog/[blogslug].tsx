import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-xl font-bold">Title: {router.query.blogslug}</h1>

      <p> Some content</p>

      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </div>
  );
}
