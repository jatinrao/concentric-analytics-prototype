"use client";
export default function ThemeToggle({
  primary,
  secondary,
  spacing,
  radius,
}: {
  primary: string;
  secondary: string;
  spacing?: string;
  radius: string;
}) {
  return (
    <style jsx global>
      {`
        :root {
          --primary: ${primary};
          --secondary: ${secondary};
          --elem-spacing: ${spacing};
          --def-radius: ${radius};
        }
      `}
    </style>
  );
}
