import React from "react";

export default function FooterLink({ link }: { link: string }) {
  return (
    <a href="#" className="capitalize text-grayishViolet hover:text-cyan">
      {link}
    </a>
  );
}
