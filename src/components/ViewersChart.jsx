import Chart from "react-apexcharts";

const ViewersChart = () => {

      const options = {
        plotOptions: {
          pie: {
            donut: {
              size: '90%',
            }
          }
        }
      }
      const series = [44, 55]
      

  return (
    <div className="">
        <div className="donut">

          <Chart
            options={options}
            series={series}
            type="donut"
            className=''
          />
  
      </div>
    </div>
  )
}

export default ViewersChart
