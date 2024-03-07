import { format } from 'date-fns'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'components/Button'
import Divider from 'components/Divider'

import { setFilter } from 'stores/booking/slice'

const ListDate = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.booking)
  const { dates } = useSelector((state) => state.data)

  const [selectedDate, setSelectedDate] = useState(filter?.date || dates[0])

  const handleSetFilterDate = useCallback((date) => {
    dispatch(setFilter({ date }))
    selectedDate.id !== date.id && setSelectedDate(date)
  }, [dispatch, selectedDate])

  return (
    <>
      <div className="grid grid-cols-10 gap-y-3">
        {dates.map((item, index) => {
          const check = item.id === selectedDate.id
          return (
            <Button
              key={index}
              primary={check}
              disabled={check}
              className='w-20 h-16'
              onClick={() => handleSetFilterDate(item)}
            >
              <div className="flex items-center justify-evenly">
                <div className='text-xs'>
                  <p>{format(item.value, 'LL')}</p>
                  <p>{format(item.value, 'E')}</p>
                </div>
                <span className="text-2xl font-medium">{format(item.value, 'd')}</span>
              </div>
            </Button>
          )})}
      </div>
      <Divider />
    </>
  )}

export default ListDate