const Page = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 py-28 lg:pt-44 lg:pb-32">
      <article className="prose prose-lg dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          This Privacy Policy describes our policies and procedures on the
          collection, use and disclosure of your information when you use the
          Service.
        </p>
        <p>
          For questions about this Privacy Policy, you can contact us at{" "}
          <a href="mailto:hello@manu.os">hello@manu.os</a>.
        </p>
      </article>
    </section>
  );
};

export default Page;
