import React from 'react';
import Link from 'next/link';
import { IoIosExpand } from "react-icons/io";
import RemoveBtn from './RemoveBtn'

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return `${description.slice(0, maxLength)}...`;
  }
  return description;
};

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

export default async function TopicList() {
  const { topics } = await getTopics();
  return (
    <div className='float-right'>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="border border-slate-400 p-4 flex gap-5 bg-slate-100 items-start my-3 mr-3 mt-16"
        >
          <div>
            <h2 className="text-2xl font-bold">{topic.title}</h2>
            <div>{truncateDescription(topic.description, 25)}</div>
            <div className="flex gap-4 mt-2">
              <p>Created: {formatDate(topic.createdAt)} </p>
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
