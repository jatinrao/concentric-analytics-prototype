"use client";
export default function ThemeToggle({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <style jsx global>
      {`
        :root {
          --primary: ${primary};
          --secondary: ${secondary};
        }
      `}
    </style>
  );
}
