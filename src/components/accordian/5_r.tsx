import { Fragment, useState } from 'react';
import data from './data';
import cx from './cx';

export default function Accordion5() {
  return (
    <Fragment>
      <h3>
        #5. React <sub>HTML input(radio)로 처리</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d, i) => (
          <AccordionItem {...d} key={d.id} initialChecked={i === 0} />
        ))}
      </ul>
    </Fragment>
  );
}

function AccordionItem({
  id,
  title,
  description,
  initialChecked,
}: {
  id: string;
  title: string;
  description: string;
  initialChecked: boolean;
}) {
  return (
    <li className={cx('item', 'item5')} key={id}>
      <input
        type="radio"
        className={cx('input')}
        name="accordion"
        id={id}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx('tab')}>
        {title}
      </label>
      <div className={cx('description')}>{description}</div>
    </li>
  );
}
