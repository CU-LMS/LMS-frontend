import React from "react";
import "./home.css";
import { BsDatabase } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="homeontainer">

        <div className="summeryCards">
        <div className="calender">
          <input type="date" className="dateInput" name="" id="" />
          <input type="date" className="dateInput" name="" id="" />
          <button type="submit " className="btn btn-primary calanderBtn">Submit</button>
        </div>
          <div class="card summeryCard" style={{ width: "20rem" }}>
            {/* <div class="card-header">Featured</div> */}
            <div class="card-body">
              <h6 class="card-title gap">
                <span>TODAYS QUESTION BANK STATUS</span>
                <span>
                  <BsDatabase/>
                </span>
              </h6>
              <table>
                <tr>
                  <td>Total</td>
                  <td>MCQ</td>
                  <td>PSYCHOMETRIC</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div class="card summeryCard" style={{ width: "20rem" }}>
            {/* <div class="card-header">Featured</div> */}
            <div class="card-body">
              <h6 class="card-title gap">
                <span>TODAYS ASSESSMENT STATUS</span>
                <span><BsDatabase/></span>
              </h6>
              <table>
                <tr>
                  <td>Total</td>
                  <td>MCQ</td>
                  <td>PSYCHOMETRIC</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div class="card summeryCard" style={{ width: "20rem" }}>
            {/* <div class="card-header">Featured</div> */}
            <div class="card-body">
              <h6 class="card-title gap">
                <span>TODAYS ASSESSMENT QC STATUS</span>
                <span><BsDatabase/></span>
              </h6>
              <table>
                <tr>
                  <td>Total</td>
                  <td>MCQ</td>
                  <td>PSYCHOMETRIC</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div class="card summeryCard" style={{ width: "20rem" }}>
            {/* <div class="card-header">Featured</div> */}
            <div class="card-body">
              <h6 class="card-title gap">
                <span>QUESTION BANK STATUS</span>
                <span><BsDatabase/></span>
              </h6>
              <table>
                <tr>
                  <td>Total</td>
                  <td>MCQ</td>
                  <td>PSYCHOMETRIC</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div class="card summeryCard" style={{ width: "20rem" }}>
            {/* <div class="card-header">Featured</div> */}
            <div class="card-body">
              <h6 class="card-title gap">
                <span>ASSESSMENT STATUS</span>
                <span><BsDatabase/></span>
              </h6>
              <table>
                <tr>
                  <td>Total</td>
                  <td>MCQ</td>
                  <td>PSYCHOMETRIC</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
          <div class="card summeryCard" style={{ width: "20rem" }}>
            {/* <div class="card-header">Featured</div> */}
            <div class="card-body">
              <h6 class="card-title gap">
                <span>CANDIDATES STATUS</span>
                <span><BsDatabase/></span>
              </h6>
              <table>
                <tr>
                  <td>Total</td>
                  <td>MCQ</td>
                  <td>PSYCHOMETRIC</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </table>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
