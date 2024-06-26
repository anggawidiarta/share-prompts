"use client";
import Form from "@/components/Form/Form";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Post {
  text: string;
  tag: string;
}

const CreatePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  /**
   * Tracks whether the form is currently submitting or not
   * @return { submitting: boolean, isSubmitting: boolean }
   */
  const [submitting, setSubmitting] = useState(false);

  /**
   * Tracks the current post state
   * @return {{ text: string, tag: string }}
   */
  const [post, setPost] = useState<Post>({ text: "", tag: "" });

  const createPost = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          text: post.text,
          tag: post.tag,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <title>Create Post</title>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPost}
      />
    </>
  );
};

export default CreatePage;
