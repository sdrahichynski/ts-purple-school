const enum PostStatusEnum {
  PUBLISHED = "published",
  DRAFT = "draft",
  DELETED = "deleted",
}

async function getFaqs(req: {
  topicId: number,
  status?: PostStatusEnum
}): Promise<Array<{ question: string, answer: string, tabs: string[], likes: number, status: PostStatusEnum }>> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  });

  return await res.json();
}
