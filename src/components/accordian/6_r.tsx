import { Fragment, useEffect, useRef, useState } from 'react';
import data from './data';
import cx from './cx';

export default function Accordion6() {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id));
  };

  return (
    <Fragment>
      <h3>
        #6. React<sub>ctrl+F 검색 가능</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d, i) => (
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

const AccordionItem = ({
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
}) => {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener('beforematch', toggle);
    }
    return () => {
      if (descRef.current)
        descRef.current.removeEventListener('beforematch', toggle);
    };
  }, [toggle]);

  return (
    <li className={cx('item', 'item3', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      <div
        className={cx('description')}
        ref={descRef}
        HIDDEN={current ? undefined : 'until-found'}
      >
        {description}
      </div>
    </li>
  );
};
