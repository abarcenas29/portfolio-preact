/**
*
* HorizontalTimeline
*
*/
import React, { Component } from 'react'
import css from 'styled-components'

const Timeline = css.section`
  white-space: nowrap;
  background-color: blue;

  > ol {
    font-size: 0;
    transition: all 1s;
    height: 1em;
    width: 100%;
    padding: 0;

    > li {
      position: relative;
      display: inline-block;
      list-style-type: none;
      width: 150px;
      height: 3px;
      background: #FF9800;

      &:first-child {
        width: 0px;
      }

      &:last-child {
        width: 0px;
      }

      &:not(:first-child) {
        margin-left: 14px;
      }

      &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        left: calc(100% + 1px);
        bottom: 0;
        width: 12px;
        height: 12px;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #FF5722;
      }

      > div {
        position: absolute;
        left: calc(100% + 7px);
        width: 280px;
        padding: 15px;
        font-size: 1rem;
        white-space: normal;
        color: black;
        background: transparent;
        border: 1px solid #FF5722;

        &:before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 0;
          height: 0;
          border-style: solid;
        }

        > time {
          display: block;
        }
      }

      &:nth-child(odd) {
        > div {
          top: -16px;
          transform: translateY(-100%);

          &:before {
            top: 100%;
            border-width: 8px 8px 0 0;
            border-color: #FF5722 transparent transparent transparent;
            margin-left: -1px;
          }
        }
      }

      &:nth-child(even) {
        > div {
          top: calc(100% + 16px);

          &:before {
            top: -8px;
            border-width: 8px 0 0 8px;
            border-color: transparent transparent transparent #FF5722;
            margin-left: -1px;
          }
        }
      }
    }
  }
`

class HorizontalTimeline extends Component {
  render () {
    return (
      <Timeline>
        <ol>
          <li>
            <div>
              <time>2009</time>
              Graduated at CEU Manila (BS COE)
            </div>
          </li>
          <li>
            <div>
              <time>2011</time>
              Worked at Prodigy Philippines
            </div>
          </li>
          <li>
            <div>
              <time>2013</time>
              Worked at Beenest Technology Solutions
            </div>
          </li>
          <li>
            <div>
              <time>2016</time>
              Worked at Social Offshore
            </div>
          </li>
          <li />
        </ol>
      </Timeline>
    )
  }
}

export default HorizontalTimeline
