import styels from './MainContainer.module.scss';

export default function MainContainer() {
  return (
    <div className={styels.container}>
      <main className={styels.main}></main>
    </div>
  );
}
