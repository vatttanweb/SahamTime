import React from 'react'
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import './index.css';

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export default function Index({ label, value, setValue }) {
    return (
        <div className={'bg-white'}>
            <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa" >
                <KeyboardDatePicker
                    clearable
                    label={label ? label : 'تاریخ'}
                    okLabel="تایید"
                    cancelLabel="لغو"
                    clearLabel="پاک کردن"
                    labelFunc={value ? date => date.format("jYYYY/jMM/jDD") : ''}
                    value={value}
                    style={{ width: '100%' }}
                    onChange={(data) => setValue(data)}
                    size="small"
                    format="jYYYY/jMM/jDD"
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}