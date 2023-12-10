import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Productitem({product}) {
  return (
    <div className="card">
      <Link href={`/member/${product.id}`}>
        <Image 
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/member/${product.id}`}>
          <h2 className="text-3xl font-bold"> {product.name} </h2>
        </Link>
      </div>
    </div>
  )
}
