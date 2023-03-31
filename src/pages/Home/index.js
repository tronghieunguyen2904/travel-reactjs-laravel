import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import images from "~/component/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faMagnifyingGlass,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const cx = classNames.bind(styles);
function HomePage() {
  const [guest, setGuest] = useState("Guests");
  const handleChange = (event) => {
    setGuest(event.target.value);
  };
  return (
    <div className={cx("Home-main")}>
      <div className={cx("Home-container")}>
        {/* slide */}
        <div className={cx("silde-container")}>
          <div className={cx("slide-content")}>
            <h1>Hotel, car & experiences</h1>
            <p>
              Accompanying us, you have a trip full of experiences. With
              Chisfis, booking accommodation, resort villas, hotels
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4f46e5",
                height: "48px",
                width: "186px",
                borderRadius: "9999px",
                "&:hover": {
                  backgroundColor: "#4338ca",
                },
                "& .MuiButton-label": {
                  borderRadius: "9999px",
                },
                marginTop: "40px",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Start your search
            </Button>
          </div>
          <div className={cx("slide-img")}>
            <div className={cx("slide-img-left")}>
              <img
                src={images.slide}
                alt="img-left"
                className={cx("img-left")}
              />
              <img
                src={images.slide2}
                alt="img-left"
                className={cx("img-left")}
              />
            </div>
            <div className={cx("slide-img-right")}>
              <img
                src={images.slide3}
                alt="img-left"
                className={cx("img-right")}
              />
            </div>
          </div>
        </div>
        <div className={cx("search-container")}>
          <form className={cx("search-body")}>
            <div
              className={cx("input-container")}
              style={{ borderRight: "2px solid #ddd" ,height:110}}
            >
              <div
                className={cx("input-location-icon")}
                style={{ marginRight: 10 }}
              >
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className={cx("input-location")}>
                <input placeholder="Location" />
                <span style={{ marginTop: 2 }}>Where are you going?</span>
              </div>
            </div>
            <div
              className={cx("input-container")}
              style={{ borderRight: "2px solid #ddd" }}
            >
              <div className={cx("input-location-icon")}>
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div className={cx("input-location")}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    placeholder="dd/mm/yyyy"
                    sx={{
                      width: 220,
                      ".MuiInputBase-input": { height: 5, fontSize: 18 },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  />
                </LocalizationProvider>
                <span style={{ marginLeft: 14 }}>Date go</span>
              </div>
            </div>
            <div className={cx("input-container")} style={{ marginBottom: 13 }}>
              <div
                className={cx("input-location-icon")}
                style={{ marginTop: 17 }}
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
              <div className={cx("input-location")}>
                <FormControl sx={{ height: 40, minWidth: 120 }}>
                  <Select
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#9b9ea4",
                    }}
                    label="Guests"
                    onChange={handleChange}
                    value={guest}
                  >
                    <MenuItem value="Guests" disabled>
                      Guests
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <span style={{ marginLeft: 15, marginTop: 10 }}>
                  Number Guest?
                </span>
              </div>
            </div>
            <div className={cx('circle-btn')}>
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-circle-btn')} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
