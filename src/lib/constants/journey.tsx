import '@/styles/globals.css';

export const JOURNEY_ITEMS = [
  {
    title: '엘리팝 반응형 홈페이지 구축',
    duration: '2015. 12',
    description: (
      <>
        <span className="fontBold">반응형 웹</span> 구현을 처음 경험한
        프로젝트로, 조직 내에도 관련 경험이 없던 환경이었습니다. 그 과정에서
        스스로 학습하며 구조를 설계해 나갔고, 회사 최초의 반응형 웹 페이지를
        성공적으로 구축해 클라이언트의 만족도 역시 높았습니다. 완성도 있는
        결과를 만들어내며 큰 보람을 느낄 수 있었던 작업입니다.
      </>
    ),
  },
  {
    title: '청년다방 홈페이지 리뉴얼',
    duration: '2016. 03',
    description: (
      <>
        당시 애니메이션 전반에 대한 이해가 부족해 구현 과정이 쉽지 않았지만, 이
        프로젝트를 통해 애니메이션의 흐름 제어와{' '}
        <span className="fontBold">animation-timing-function</span>의 활용을
        보다 깊이 이해하게 되었습니다.
      </>
    ),
  },
  {
    title: '스타벅스 코리아 웹사이트 유지 보수',
    duration: '2016. 11 - 2017. 07',
    description: (
      <>
        <span className="fontBold">jQuery</span> 기반으로{' '}
        <span className="fontBold">스크롤 트리거 애니메이션</span>을 구현했던
        작업으로 기억에 남습니다. 특히 콜드브루 프로모션 랜딩 페이지를 담당하여,
        스크롤에 따라 커피가 채워지는 인터랙션을 직접 구현하며 스크롤 이벤트
        처리에 대한 이해를 높일 수 있었습니다.
      </>
    ),
  },
  {
    title: '현대 자동차 채용사이트 리뉴얼',
    duration: '2017. 06 - 2017. 07',
    description: (
      <>
        처음으로 대형 채용사이트 구축을 담당했던 프로젝트로, 체계화된{' '}
        <span className="fontBold">디자인 시스템</span>을 기반으로 UI를
        구현했습니다. 특히{' '}
        <span className="fontBold">인쇄용 화면(Print UI)</span>을 별도로
        구성해야 했는데, 당시 이해도가 부족한 영역이었음에도 직접 분석하며
        구현해 나가며 많은 것을 배울 수 있었습니다. 당시 적용된 디자인이
        현재까지도 어느정도 유지되고 있어 개인적으로 큰 보람을 느꼈던
        작업입니다.
      </>
    ),
  },
  {
    title: '카카오 VX 웹 퍼블리싱 총괄',
    duration: '2018. 06 - 2021. 10',
    description: (
      <>
        여러 사업부의 웹 퍼블리싱을 단독으로 맡아 다양한 서비스의 UI를 구축하고
        운영했습니다. 반복되는 UI를 <span className="fontBold">컴포넌트화</span>
        하며 작업 효율과 품질을 높였고, 여러 프로젝트를 안정적으로 지원할 수
        있는 기반을 마련했던 경험입니다.
      </>
    ),
  },
  {
    title: '프렌즈 스크린 관리자 페이지 리뉴얼',
    duration: '2021. 06 - 2021. 10',
    description: (
      <>
        대규모 회원을 가진 프렌즈 스크린의 관리자 페이지 리뉴얼 프로젝트로, 여러
        관리자 시스템 중에서도 가장 큰 규모의 작업이었습니다. 백엔드 개발자와의
        협업을 통해 데이터 구조를 먼저 고려한 마크업 설계를 경험하며,{' '}
        <span className="fontBold">데이터 기반 UI 구축</span> 역량을 한층 확장할
        수 있었습니다. 특히 다양한 입력 · 관리 기능을 다루며{' '}
        <span className="fontBold">Form UI</span>에 대한 이해도 또한 크게 높일
        수 있었습니다.
      </>
    ),
  },
  {
    title: '프로모션 랜딩 페이지 개발',
    duration: '2023. 03 - 2025. 03',
    description: (
      <>
        처음으로 <span className="fontBold">프론트 개발</span>을 단독으로 맡아
        진행한 프로젝트로, 프로모션 랜딩 페이지의 UI 구축과 댓글 작성 기능을
        구현했습니다. <span className="fontBold">React · Next.js 환경</span>에서
        데이터를 처리하며 기능 흐름을 직접 구현해 나가는 경험을 쌓았습니다. 또한
        반복되는 페이지 구조는 <span className="fontBold">템플릿화</span>하고,
        UI 요소들은 <span className="fontBold">컴포넌트화</span>하여 작업 효율과
        재사용성을 크게 높일 수 있었습니다.
      </>
    ),
  },
  {
    title: '스토어 레거시 페이지 개선 및 Next.js 전환',
    duration: '2022. 07 - 2025. 03',
    description: (
      <>
        PHP 기반 레거시 페이지의 복잡하고 중복된 CSS를 정리하며 코드 구조를 한층
        더 안정적으로 다듬었습니다. <span className="fontBold">Next.js</span>{' '}
        전환 과정에서는 API가 확정되기 전 예상되는{' '}
        <span className="fontBold">데이터 구조</span>로{' '}
        <span className="fontBold">타입을 정의</span>하고, UI 구조와 컴포넌트를
        선제적으로 구축해 검색 페이지 성능 향상에 기여했습니다.
      </>
    ),
  },
];
