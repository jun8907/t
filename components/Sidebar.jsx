'use client'

import { signOut, useSession } from "next-auth/react";
import Head from 'next/head' // Head 컴포넌트 임포트
import Link from 'next/link'

export default function Sidebar() {
  const {status, data:session} = useSession()
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <aside className="side-bar">
        <section className="side-bar__icon-box">
          <section className="side-bar__icon-1">
            <div></div>
            <div></div>
            <div></div>
          </section>
        </section>
        <div>
          { 
            status === 'authenticated' ? (
              <>
              <ul>
                <li><a href="/teamone"><i className="fa-solid fa-cat"></i>팀원소개</a></li>
                <li><a href="/topiclist">게시글 리스트</a></li>
                <li><Link href="/addTopic">게시글 작성하기</Link></li>
              </ul>
              </>
            ) : (
              <>
              <ul>
                <li>
                  <a href="/teamone"><i className="fa-solid fa-cat"></i>팀원소개</a>
                </li>
              </ul>
              </>
            )
          }
        </div>
        
      </aside>
    </div>
  )
}