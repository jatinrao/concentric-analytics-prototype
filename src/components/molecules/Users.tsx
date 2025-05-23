"use client";

export default function Users({
  tenant,
  locale,
}: {
  tenant: string;
  locale: string;
}) {
  //   if (!user) {
  //     return <div className="w-full m-auto">Loading ....</div>;
  //   }

  return (
    <div>
      <h1 className="text-black">Users </h1>
      <p className="text-black">
        {" "}
        {tenant}----{locale}{" "}
      </p>
    </div>
  );
}
