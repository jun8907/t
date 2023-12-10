'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function RemoveBtn({ id }) {
  const router = useRouter()

  const removeTopic = async () => {
    const confirmd = confirm("승인하시겠습니까?")
    if (confirmd) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        router.refresh()
      }
    }
  }

  return (
    <button onClick={removeTopic} className="text-red-600">
      승인하기
    </button>
  )
}