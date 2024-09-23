import { Fragment, useState } from 'react';
import data from './data';
import cx from './cx';
import VanillaWrapper from '../vanillaWrapper';

function itemBuilder({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const $li = document.createElement('li');
  $li.classList.add(cx('item'), cx('item3'));
  $li.setAttribute('data-id', id);

  const $tab = document.createElement('div');
  $tab.classList.add(cx('tab'));
  $tab.textContent = title;

  const $description = document.createElement('div');
  $description.classList.add(cx('description'));
  $description.textContent = description;

  $li.append($tab, $description);

  return $li;
}

function initiator(wrapper: HTMLDivElement) {
  let currentId: string | null = null;

  const $ul = document.createElement('ul');
  $ul.classList.add(cx('container'));

  const $items = data.map(itemBuilder);

  $ul.append(...$items);

  const handleClickTab = (e: Event) => {
    const $el = e.target as HTMLElement;

    if (!$el.classList.contains(cx('tab'))) return;

    const targetId = $el.parentElement!.dataset.id;

    if (!targetId) return;

    currentId = targetId === currentId ? null : targetId;

    $items.forEach($item => {
      $item.classList.toggle(cx('current'), currentId === $item.dataset.id);
    });
  };

  $ul.addEventListener('click', handleClickTab);

  wrapper.append($ul);
  ($items[0].children[0] as HTMLElement).click();
}

export default function Accordion4V() {
  return <VanillaWrapper title="#4" initiator={initiator} />;
}
