import { Locale } from 'date-fns'
import { enUS } from 'date-fns/locale'
import * as React from 'react'
import { Months, Range } from '../types'

export type CalendarContextProps = {
  disableFutureDates?: boolean
  disablePastDates?: boolean
  locale?: Locale
  months: Months
  onNextMonth: VoidFunction
  onPrevMonth: VoidFunction
  onSelectDate: (date: Date) => void
  selected?: Range | Date | null
  weekday?: string
}

export const CalendarContext = React.createContext<CalendarContextProps>({
  locale: enUS,
  months: [],
  onNextMonth: () => null,
  onPrevMonth: () => null,
  onSelectDate: () => null,
})

export function CalendarProvider({
  disableFutureDates,
  disablePastDates,
  locale,
  months,
  onNextMonth,
  onPrevMonth,
  onSelectDate,
  selected,
  weekday,
  ...props
}: React.PropsWithChildren<CalendarContextProps>) {
  return (
    <CalendarContext.Provider
      value={{
        disableFutureDates,
        disablePastDates,
        locale,
        months,
        onNextMonth,
        onPrevMonth,
        onSelectDate,
        selected,
        weekday,
      }}
      {...props}
    />
  )
}

export function useCalendarContext() {
  return React.useContext(CalendarContext)
}
