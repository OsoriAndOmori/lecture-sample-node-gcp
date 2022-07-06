# Tutorial : React-Three-Fiber With GCP Kubernetes Engine

-----------

### Get Started
- [DEMO Link](https://bit.ly/3amR1XZ)
- `npm install`
- `npm run start`
- `http://localhost:3000/level1`

------------

### node 설치 & react app init
- [nodejs link](https://nodejs.org/ko/) : 아무거나 받으면 됨
- `npx create-react-app sample-react --template typescript`

### react 개요
- Component 화 : View 의 재사용성 증가
- View 와 Logic 의 혼연 일체
- 데이터가 달라지면 DOM을 버리고 새로 그린다. 그럼 진짜 DOM tree 로 매번 비교를 함?
  - Virtual DOM 개념.
    <img src="https://i.imgur.com/kNKIeQZ.gif">
  - 변하는 데이터만 그릴 수 있도록 컴포넌트 계층 설계가 중요한 편.
  - props 와 상태 개념.
- 간단한 코드 구경

### [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- `npm install three @react-three/fiber`
- WebGL, threejs 를 react 환경에서 사용할 수 있도록 개발됨.
- 대학교 그래픽스 과목 Unity Programming 생각하면 딱 맞음.
- 그래픽스 지식이 있어야 딥한 개발 가능.

### Docker
- DockerFile 을 통한 빌드
  - M1 노트북 사용하는 경우 필히 멀티 플랫폼 도커 빌드를 진행해야함.
  - `npm run build` :  먼저 빌드 결과물 로컬에서 만들고,
  - `docker buildx build --platform=linux/arm/v7,linux/arm64,linux/amd64,linux/386 --push -t skywhite15/playground-node:0.0.2 -f Dockerfile .`
- DockerHub 으로 전송 : [링크](https://hub.docker.com/repository/docker/skywhite15/playground-node)

### [Google Cloud Platform - Kubernetes Engine](https://console.cloud.google.com/)
- 어떤것도 필요없다 오직 웹브라우저 하나면 모두 가능
  - 터미널도 웹브라우저 UI로 제공 : 잠깐 같이 구경
  - 일반적인 k8s 스펙을 활용할 수 있다. (커스텀한 뭔가가 없음.)
  - GUI 로 k8s 스펙을 지정하고 init 하면 5분 뒤 만들어 진다.
- 애플리케이션 탭
- 서비스 및 수신
- 작업 부하
- 최소 월 $100 가 필요하다... (치명적인 단점)

### Helm 을 통한 배포 및 인스턴스 확인
- Google Cloud Shell 활용
- 팀에서 쓰는 argoCD 같은걸 도입해서 자체 배포 CI/CD 만들어야 하지 않을까
- `git clone https://github.com/OsoriAndOmori/sample-node-gcp.git`
- `helm install sample-react .chart/`
- `helm upgrade sample-react .chart/`
- `helm uninstall sample-react`