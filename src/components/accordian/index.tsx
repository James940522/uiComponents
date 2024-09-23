'use client';

import Accordion1 from './1_r';
import Accordion2 from './2_r';
import Accordion3 from './3_r';
import Accordion4V from './4_v';
import Accordion5V from './5_v';
import cx from './cx';

function Accordions() {
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <Accordion1 />
      <Accordion2 />
      <Accordion3 />
      <Accordion4V />
      <Accordion5V />
    </div>
  );
}

export default Accordions;
