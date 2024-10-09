import { Fragment, useState } from 'react';
import data from './data';
import cx from './cx';

export default function TabMenu1() {
  const [currentId, setCurrentId] = useState(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId(id);
  };

  const currentData = data.find(el => el.id === currentId);

  return (
    <Fragment>
      <h3>
        #1. React <sub>현재 desc만 HTML로 그리기</sub>
      </h3>
      <div className={cx('container')}>
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
        {currentData && (
          <div className={cx('description')}>{currentData.description}</div>
        )}
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
