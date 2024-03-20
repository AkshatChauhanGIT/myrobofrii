import React from 'react';

export default function SearchBox({searchField , searchChange}) {
  return (
    <div className='pa2'>
      <input
        className='bg-lightest-blue pa3 ba b--green'
        type="search"
        placeholder='Search robots'
        onChange={searchChange}
      />
    </div>
  )
}
