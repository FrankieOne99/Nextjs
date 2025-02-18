import { notFound } from "next/navigation";
import { SnippetDetailProps } from "../interfaces/SnippetDetailProps.model";
import Link from "next/link";
import { db } from "@/db";
import * as actions from "@/actions";

export default async function SnippetDetail(props: SnippetDetailProps) {
  await new Promise((f) => setTimeout(f, 2000)); //I slowed the page loading, to show the correct implementation of loading
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold flex-grow text-center">
          {snippet.title}
        </h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200 mx-20">
        <code>{snippet.code}</code>
      </pre>
    </>
  );
}
