/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BlockMobile from './lecturesMobile';
import BlockLargeScreen from './lecturesLargeScreen';

const BlockCoVanGiangVien = ({ advisors, lecturers, guestLecturers, id }) => {
  return (
    <>
      <div id={id} />
      <BlockMobile {...{ advisors, lecturers, guestLecturers }} />
      <BlockLargeScreen {...{ advisors, lecturers, guestLecturers }} />
    </>
  );
};
export default BlockCoVanGiangVien;
