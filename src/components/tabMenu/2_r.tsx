import { Fragment, useState } from 'react';
import data from './data';
import cx from './cx';

export default function TabMenu2() {
  const [currentId, setCurrentId] = useState(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId(id);
  };

  return (
    <Fragment>
      <h3>
        #2. React <sub>다 그려놓고 hidden/show css 처리</sub>
      </h3>
      <div className={cx('container', 'tabMenu2')}>
        <ul className={cx('tabList')}>
          {data.map(d => (
            <TabMenuItem
              {...d}
              key={d.id}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
            />
          ))}
        </ul>
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className={cx('description', { current: currentId === d.id })}
            >
              {d.description}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

function TabMenuItem({
  id,
  title,

  current,
  toggle,
}: {
  id: string;
  title: string;

  current: boolean;
  toggle: () => void;
}) {
  return (
    <li className={cx('tab', { current })} key={id} onClick={toggle}>
      {title}
    </li>
  );
}
