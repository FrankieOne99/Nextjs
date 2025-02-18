import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    //This need to be a server action!!
    "use server";

    //Check the user's inputs and make sure they're valid
    const title = formData.get("title") as string; //I write them as "strings" because typescript can considered them as file
    const code = formData.get("code") as string;

    //Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });
    console.log(snippet);
    redirect("/");
  }

  //Create snipppet is invoke every type a user submit the form
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a new Snippet!</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input name="title" className="border p-2 w-full" id="title" />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea name="code" className="border p-2 w-full" id="code" />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};
export default SnippetCreatePage;
