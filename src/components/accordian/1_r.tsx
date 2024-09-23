import { Fragment, useState } from 'react';
import data from './data';
import cx from './cx';

export default function Accordion1() {
  const [currentId, setCurrentId] = useState(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId(id);
  };

  return (
    <Fragment>
      <h3>
        #1. React <sub>현재 desc만 HTML로 그리기</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map(d => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
}

function AccordionItem({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) {
  return (
    <li className={cx('item', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      {current ? <div className={cx('description')}>{description}</div> : null}
    </li>
  );
}
