import React from 'react';
import Link from 'next/link';
import { IoIosExpand } from "react-icons/io";
import RemoveBtn from './RemoveBtn'


const getTopics = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function TopList() {
  const { topics } = await getTopics();
  return (
    <div className='w-11/12 float-right mr-9'>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="border border-slate-400 p-4 flex gap-5 bg-slate-100 items-start mt-10 justify-between"
        >
          <div>
            <h2 className="text-2wl font-bold text-blue-900">{topic.title}</h2>
            <div>{topic.description}</div>
            <div className="flex gap-4">
              <p>Created: {topic.createdAt}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id}/>
            <Link href={`/listTopic/${topic._id}`}>
              <IoIosExpand size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
    
  );
}
