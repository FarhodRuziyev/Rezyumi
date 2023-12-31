import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DateContext } from "../../component/state/stete";
import "./hoom.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const { date, setDate } = useContext(DateContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => setDate(data);
  console.log(errors);
  console.log(date);

  const options = [
    {
      label: "Day",
    },
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
    {
      label: 4,
      value: 4,
    },
    {
      label: 5,
      value: 5,
    },
    {
      label: 6,
      value: 6,
    },
    {
      label: 7,
      value: 7,
    },
    {
      label: 8,
      value: 8,
    },
    {
      label: 9,
      value: 9,
    },
    {
      label: 10,
      value: 10,
    },
    {
      label: 11,
      value: 11,
    },
    {
      label: 12,
      value: 12,
    },
    {
      label: 13,
      value: 13,
    },
    {
      label: 14,
      value: 14,
    },
    {
      label: 15,
      value: 15,
    },
    {
      label: 16,
      value: 16,
    },
    {
      label: 17,
      value: 17,
    },
    {
      label: 18,
      value: 18,
    },
    {
      label: 19,
      value: 19,
    },
    {
      label: 20,
      value: 20,
    },
    {
      label: 21,
      value: 21,
    },
    {
      label: 22,
      value: 22,
    },
    {
      label: 23,
      value: 23,
    },
    {
      label: 24,
      value: 24,
    },
    {
      label: 25,
      value: 25,
    },
    {
      label: 26,
      value: 26,
    },
    {
      label: 27,
      value: 27,
    },
    {
      label: 28,
      value: 28,
    },
    {
      label: 29,
      value: 29,
    },
    {
      label: 30,
      value: 30,
    },
    {
      label: 31,
      value: 31,
    },
  ];
  const month = [
    {
      label: "Month",
    },
    {
      label: "Yanvar",
      value: "Yanvar",
    },
    {
      label: "Fevral",
      value: "Fevral",
    },
    {
      label: "Mart",
      value: "Mart",
    },
    {
      label: "Aprel",
      value: "Aprel",
    },
    {
      label: "May",
      value: "May",
    },
    {
      label: "Iyun",
      value: "Iyun",
    },
    {
      label: "Iyul",
      value: "Iyul",
    },
    {
      label: "Avgust",
      value: "Avgust",
    },
    {
      label: "sentyabr",
      value: "sentyabr",
    },
    {
      label: "Oktyabr",
      value: "Oktyabr",
    },
    {
      label: "Noyabr",
      value: "Noyabr",
    },
    {
      label: "Dekabr",
      value: "Dekabr",
    },
  ];
  const years = [
    {
      label: "Year",
    },
    {
      label: 1950,
      value: 1950,
    },
    {
      label: 1951,
      value: 1951,
    },
    {
      label: 1952,
      value: 1952,
    },
    {
      label: 1953,
      value: 1953,
    },
    {
      label: 1954,
      value: 1954,
    },
    {
      label: 1955,
      value: 1955,
    },
    {
      label: 1956,
      value: 1956,
    },
    {
      label: 1957,
      value: 1957,
    },
    {
      label: 1958,
      value: 1958,
    },
    {
      label: 1959,
      value: 1959,
    },
    {
      label: 1960,
      value: 1960,
    },
    {
      label: 1961,
      value: 1961,
    },
    {
      label: 1962,
      value: 1962,
    },
    {
      label: 1963,
      value: 1963,
    },
    {
      label: 1964,
      value: 1964,
    },
    {
      label: 1965,
      value: 1965,
    },
    {
      label: 1966,
      value: 1966,
    },
    {
      label: 1967,
      value: 1967,
    },
    {
      label: 1968,
      value: 1968,
    },
    {
      label: 1969,
      value: 1969,
    },
    {
      label: 1970,
      value: 1970,
    },
    {
      label: 1971,
      value: 1971,
    },
    {
      label: 1972,
      value: 1972,
    },
    {
      label: 1973,
      value: 1973,
    },
    {
      label: 1974,
      value: 1974,
    },
    {
      label: 1975,
      value: 1975,
    },
    {
      label: 1976,
      value: 1976,
    },
    {
      label: 1977,
      value: 1977,
    },
    {
      label: 1978,
      value: 1978,
    },
    {
      label: 1979,
      value: 1979,
    },
    {
      label: 1980,
      value: 1980,
    },
    {
      label: 1981,
      value: 1981,
    },
    {
      label: 1982,
      value: 1982,
    },
    {
      label: 1983,
      value: 1983,
    },
    {
      label: 1984,
      value: 1984,
    },
    {
      label: 1985,
      value: 1985,
    },
    {
      label: 1986,
      value: 1986,
    },
    {
      label: 1987,
      value: 1987,
    },
    {
      label: 1988,
      value: 1988,
    },
    {
      label: 1989,
      value: 1989,
    },
    {
      label: 1990,
      value: 1990,
    },
    {
      label: 1991,
      value: 1991,
    },
    {
      label: 1992,
      value: 1992,
    },
    {
      label: 1993,
      value: 1993,
    },
    {
      label: 1994,
      value: 1994,
    },
    {
      label: 1995,
      value: 1995,
    },
    {
      label: 1996,
      value: 1996,
    },
    {
      label: 1997,
      value: 1997,
    },
    {
      label: 1998,
      value: 1998,
    },
    {
      label: 1999,
      value: 1999,
    },
    {
      label: 2000,
      value: 2000,
    },
    {
      label: 2001,
      value: 2001,
    },
    {
      label: 2002,
      value: 2002,
    },
    {
      label: 2003,
      value: 2003,
    },
    {
      label: 2004,
      value: 2004,
    },
    {
      label: 2005,
      value: 2005,
    },
    {
      label: 2006,
      value: 2006,
    },
    {
      label: 2007,
      value: 2007,
    },
    {
      label: 2008,
      value: 2008,
    },
    {
      label: 2009,
      value: 2009,
    },
    {
      label: 2010,
      value: 2010,
    },
    {
      label: 2011,
      value: 2011,
    },
    {
      label: 2012,
      value: 2012,
    },
    {
      label: 2013,
      value: 2013,
    },
  ];
  const gender = [
    {
      label: "select",
    },
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
  ];

  return (
    <>
      <div className="home">
        <form className="forma" onSubmit={handleSubmit(onSubmit)}>
          <div className="rasm">
            <span className="span1">
              <input
                className="img"
                type="text" value="https://pin.it/36aS7Uw" 
                placeholder="Add Photo"
                {...register("Photo", {})}
              />
            </span>
            <div className="span2">
              <label htmlFor="#">
                First name
                <input
                  className="inp"
                  type="text"
                  placeholder="First name"
                  {...register("First", { required: true })}
                />
              </label>
              <label htmlFor="#">
                Last name
                <input
                  className="inp"
                  type="text"
                  placeholder="Last name"
                  {...register("Last", { required: true })}
                />
              </label>
            </div>
          </div>
          <div className="nomer">
            <label htmlFor="#">
              Email address
              <input
                type="email"
                placeholder="Email address"
                {...register("Email", { required: true })}
              />
            </label>
            <label htmlFor="#">
              Phone number
              <input
                type="number"
                placeholder="Phone number"
                min={0}
                minLength={12}
                maxLength={15}
                {...register("Phone", { required: true })}
              />
            </label>
          </div>
          <label htmlFor="#">
            Address
            <textarea
              rows="3"
              cols="102"
              {...register("Adress", { required: true })}
            />
          </label>
          <div className="adres">
            <label htmlFor="#">
              Zip code
              <input
                type="text"
                placeholder="Zip code"
                {...register("code", { required: true })}
              />
            </label>
            <label htmlFor="#">
              City/Town
              <input
                type="text"
                placeholder="City/Town"
                {...register("City", { required: true })}
              />
            </label>
          </div>
          <div className="day">
            <label htmlFor="#">
              Date of birth
              <div className="selekt">
                <select {...register("Day", { require: true })}>
                  {options.map((option) => (
                    <option value={option.value}> {option.label}</option>
                  ))}
                </select>
                <select {...register("Month", { require: true })}>
                  {month.map((mon) => (
                    <option value={mon.value}> {mon.label}</option>
                  ))}
                </select>
                <select {...register("Year", { require: true })}>
                  {years.map((year) => (
                    <option value={year.value}>{year.label}</option>
                  ))}
                </select>
              </div>
            </label>
            <label htmlFor="#">
              Place of birth
              <input
                type="text"
                placeholder="Place of birth"
                {...register("birth", {})}
              />
            </label>
          </div>
          <div className="driving">
            <label htmlFor="#">
              Driving licence
              <input
                type="text"
                placeholder="A B"
                {...register("Driving", { require: true })}
              />
            </label>
            <label htmlFor="#">
              Gender
              <select {...register("Gender", { require: true })}>
                {gender.map((item) => (
                  <option value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="natsiya">
            <label htmlFor="#">
              Nationality
              <input
                type="text"
                placeholder=""
                {...register("Nationality", {})}
              />
            </label>
            <label htmlFor="#">
              Marital status
              <input
                type="text"
                placeholder=""
                {...register("Marital", {})}
              />
            </label>
          </div>
          <div className="linkedin">
            <label htmlFor="#">
              LinkedIn
              <input type="text" placeholder="" {...register("LinkedIn", {})} />
            </label>
            <label htmlFor="#">
              Website
              <input
                type="text"
                placeholder="Website"
                {...register("Website", {})}
              />
            </label>
          </div>
          <div className="sabmit">
            <button id="asd">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}
