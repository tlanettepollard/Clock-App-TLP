Grid notes for page -- https://grid.layoutit.com/

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "Quote"
    "clock"
    "footer";
}

.Quote {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "random-quote refresh";
  grid-area: Quote;
}

.refresh { grid-area: refresh; }

.random-quote { grid-area: random-quote; }

.clock {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.4fr 0.6fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "container-"
    "more-button";
  grid-area: clock;
}

.container- {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1.3fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "greeting"
    "current-time";
  grid-area: container-;
}

.greeting { grid-area: greeting; }

.current-time { grid-area: current-time; }

.more-button { grid-area: more-button; }

.footer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.4fr 1fr 1fr 0.9fr 0.7fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "region"
    "year-day"
    "week-day"
    "week-number"
    "attribution";
  grid-area: footer;
}

.region { grid-area: region; }

.year-day { grid-area: year-day; }

.week-day { grid-area: week-day; }

.week-number { grid-area: week-number; }

.attribution { grid-area: attribution; }

<i class="fas fa-angle-down"></i>


// Default: Mobile

body {
    font-family: $font-family;
    //overflow: hidden;
}

.background {
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;

    &::before {
        content: '';
        position: absolute; 
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        background: rgba(0,0,0,0.4);
    }
}

.main__container {
  @include flex (column, space-between); 
  position: relative;
  max-width: 100vw; 
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 auto;
  box-sizing: inherit;
  transition: transform 0.5s ease;
}

//.item-container {
   // @include flex (row, space-between);
    //
//}

.quote__container {
  max-width: 85vw;
  width: 100%;
  flex-wrap: nowrap;
  align-items: baseline;
  display: grid;
  grid-template-columns: 80% 20%;
  height: auto;
  margin: 0 auto;
  margin-top: 5vh;
  box-sizing: border-box;

  @include md-breakpoint {
      padding-right: 50px;
  }

  &-random {
      max-width: 100%;
      width: 100%;
      height: auto;
      padding-right: 25px;
      margin: 0;
      text-align: left;
      color: white;

      @include md-breakpoint {
          padding-right: 50px;
          font-size: 1.175rem;

      }

      .author {
          margin-top: 25px;
      }
  }
}

#refresh {
    //height: 1.8rem;
    border: none;
    cursor: pointer;
    background: none;
}

.current {
    @include flex (column, space-between);
    flex-wrap: nowrap;
    justify-content: flex-end;
    max-width: 85vw;
    max-height: 80vh;
    width: 100%;
    height: 90%;
    margin: 0 auto;
    top: -2%;
    padding-bottom: 3rem;
    color: white;
    //z-index: 33;

    &__container {
        @include flex (column, space-between);
        width: 100%;

        header {
            max-width: 85vw;
            width: 100%;
            height: 100%;
            @include flex (row, flex-start);

            @include md-breakpoint {
                @include flex (row, flex-start);  
            }

            .icon {
                max-width: 5vw;
                max-width: 5vh;
                padding-right: 20px;
                @include md-breakpoint {
                   // padding-right: 20px;
                }
            }
            .current__greeting {
                text-transform: uppercase;
                font-weight: $weight-regular !important;
                letter-spacing: 3px;
                @include md-breakpoint {
                    font-size: 1.5rem;
                }
            }

            .currently {
                visibility: hidden;

                @include md-breakpoint {
                    visibility: visible;
                    padding-left: 5px;
                    text-transform: uppercase;
                    font-size: 1.5rem;
                    font-weight: $weight-regular !important;
                    letter-spacing: 3px;
                }
            }
        }
    }

    &__time {
        @include flex (column, space-between);
        max-width: 100vw;
        width: 100%;
        height: 100%;
        padding-bottom: 5%;

        .time__container {
            @include flex(row, space-evenly);
            max-width: 85vw;
            width: 100%;
            height: 100%;
            position: relative;

            .time {
                margin: 0;
                
                //padding: 1rem 1.6rem 1rem 0;
                font-size: 8rem;
                font-weight: $weight-regular;
                letter-spacing: -3px;
                text-align: left;

                @include md-breakpoint {
                    font-size: 12rem;
                }

            }

            .standard-time {
                max-width: 100vw;
                max-height: 100vh;
                width: 100%;
                height: 100%;
                @include flex (column, center);
                flex-wrap: nowrap;
                align-items: flex-start;
                padding-left: 8%;

                .period,
                .time-zone {
                    //padding: 5px 0 0 5px;
                    font-weight: $weight-regular !important;

                    @include md-breakpoint {
                        font-size: 1.5rem;
                    }
                }

                .period {
                    text-transform: uppercase;

                    @include md-breakpoint {
                        padding-bottom: 5%;
                    }
                }
            }
        }
    }

    &__location {
        width: 100%;
        height: 100%;
        @include flex (row, space-between);
        flex-wrap: nowrap;
        margin: 0 auto; 
       // margin-top: 2rem;
        padding-left: 5px;
        font-weight: $weight-regular;
        text-transform: uppercase;
        letter-spacing: 3px;

        @include md-breakpoint {
            font-size: 1.5rem;
        }

    }

    .btn-container {
        position: relative;
        width: 100%;
        height: 20%;
        margin-bottom: 10%;

        @include md-breakpoint {
            margin-bottom: 8%;
        }
    
        .btn-more {
            border: none;
            margin: 50px 220px 10px 0;
            padding: 4px 18px;
            border-radius: 32px;
            background-color: $white;
            @include flex (row, space-between);
            cursor: pointer;

            /*max-width: 15vh;
            max-height: 5vh;
            width: 100%;
            height: 100%;
            margin: 50px 220px 10px 0;
            padding: 0 5px 0 10px;
            
            @include flex (row, space-between);
            flex-wrap: nowrap;
            align-items: center;
            //justify-content: flex-end;
            border-radius: 32px;
            border: 1px solid $dark-gray;
            cursor: pointer; */

            .more {
                font-size: 16px;
                letter-spacing: 5px;
                text-transform: uppercase;
                color: $dark-gray;
                transition: all 1s ease;
            }

            .arrow {
                padding: 10px 15px;
                border-radius: 32px;
                margin-left: 1rem;
                background-color: $black;

                .fa-angle-down {
                    color: $white;
                    font-size: 1.5rem;
                    transition: all 0.6s ease;
                }
            } 

            .rotate {
                transition: all 0.6s ease;
                transform: rotate(180deg);
            }
        }
    }
}


.description {
    display: none;
    width: 100vw;
    height: 100vh;
    //position: absolute;
    flex-flow: row nowrap;
    justify-content: center;
    transition: all 0.5s ease;
    //background: rgba(255, 255, 255, 0.75);
    margin: 0 auto;
    padding: 0;
    //padding: 4rem 0;

    

    .desc-content {
        max-width: 85vw;
        max-height: 100%;
        width: 100%;
        height: auto;
        margin: 0 auto;
        padding: 6vh 0vh;
       // @include flex (column, center);
       // align-items: center;

        @include md-breakpoint {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas: "timezone week-day"
            "year-day week-number";
            column-gap: 8rem;
            row-gap: 4.8rem;
            padding: 7vh 0vh;

        }
    }
    
    .info {
        @include flex (row, space-between);
        max-width: 85vw;
        max-height: 100%;
        width: 100%;
        height: 100%;
        padding: 5px 0;

        @include md-breakpoint {
            display: unset;
        }

        .desc-info {
           font-size: 12px !important;
           font-weight: $weight-regular;
           text-transform: uppercase; 
           text-align: left;
        }

        .desc-item {
            font-size: 1.25rem;
            font-weight: $weight-regular; 
            margin: 0;

            @include md-breakpoint {
                font-size: 1.875rem;
                text-align: left;
            }
        }
    
    }

    .desc-region {
        grid-area: timezone;
    }

    .desc-week-day {
        grid-area: week-day;
    }

    .desc-year-day {
        grid-area: year-day;
    }

    .desc-week-number {
        grid-area: week-number;
    }
}

.description .appear {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

.top {
    top: 120%;
}


/* App Function */ 
.transform {
    transform: translate3d(0, -2rem, 0)
}


/* Attribution */
.attribution {
    position: relative;
    padding: 5px 0;
    font-size: 11px;
    text-align: center;
}

.attribution a:hover {
    //color: $white;
}