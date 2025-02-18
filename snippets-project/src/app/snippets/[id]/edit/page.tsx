import { notFound } from "next/navigation";
import { db } from "@/db";
import { SnippetDetailProps } from "../../interfaces/SnippetDetailProps.model";
import SnippetEditForm from "@/components/snippet-edit-form";

export default async function SnippetEditPage(props: SnippetDetailProps) {
  const { id } = await props.params;

  const snippetId = parseInt(id);
  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <h2>
        <SnippetEditForm snippet={snippet} />
      </h2>
    </div>
  );
}
