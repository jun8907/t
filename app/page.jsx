import TopicList from '@/components/TopicList';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="projectintroduce">
        <table>
          <tbody>
            <tr className="project text-2xl">
              <td className="font-bold">프로젝트 명 : </td>
              <td className="pl-5">admin</td>
            </tr>
            <tr className="introduce text-2xl">
              <td className="font-bold">프로젝트 소개 : </td>
              <td className="in pl-5">
                본 프로젝트는 아쉽게 <br />
                떠나간 fns 정식 동아리 승인이 거절되었기 때문에 <br />
                만들게 된 동아리 승인 사이트입니다.
              </td>
            </tr>
          </tbody>
        </table>

        <TopicList />
      </div>
    </div>
  );
}
