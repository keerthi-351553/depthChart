import React, { Component } from 'react';
import * as d3 from 'd3';
var _ = require('lodash');
const order_book ={
	"name": "BTRX",
	"market": "BTC/USDT",
	"bids": [{
		"side": "buy",
		"price": 9650.00000003,
		"amount": 0.46945262,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9650.00000002,
		"amount": 0.11899394,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9650.00000001,
		"amount": 0.12583032,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9650,
		"amount": 1.06356341,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9645,
		"amount": 0.05,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9642,
		"amount": 0.5172682,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9641.52579312,
		"amount": 0.09827004,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9641,
		"amount": 0.00211599,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9640.34982665,
		"amount": 0.01092612,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9635.83600002,
		"amount": 0.86490255,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9633.32,
		"amount": 0.00132721,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9631.8602055,
		"amount": 0.00061276,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9606.75400002,
		"amount": 0.0012631,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9600.00000001,
		"amount": 0.18446083,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9600,
		"amount": 1.24123758,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9597.1757024,
		"amount": 0.16280936,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9595,
		"amount": 0.04,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9592.14528508,
		"amount": 0.0097,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9592.0989599,
		"amount": 0.01231555,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9590,
		"amount": 0.00244612,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "buy",
		"price": 9584.24220002,
		"amount": 0.00061276,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9583.41037675,
		"amount": 0.00091674,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9580,
		"amount": 0.50499739,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9577.7777,
		"amount": 0.05,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9577.67200002,
		"amount": 0.0012631,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9570,
		"amount": 0.01096487,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9563.64067771,
		"amount": 3,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9563.6406777,
		"amount": 0.22923359,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9563.64067768,
		"amount": 0.15301744,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9559,
		"amount": 0.2,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9555,
		"amount": 0.1,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9550.00000003,
		"amount": 0.005202,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9550.00000001,
		"amount": 0.10538157,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9548.59000002,
		"amount": 0.0012631,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9547.59360701,
		"amount": 0.04759065,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9543.84809315,
		"amount": 0.01388168,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9541.1,
		"amount": 0.1,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9536.62,
		"amount": 0.00145618,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9534.960548,
		"amount": 0.00137157,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9533.314,
		"amount": 0.00944771,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9530.89591763,
		"amount": 0.00034859,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9525.2,
		"amount": 0.3,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9519.50800002,
		"amount": 0.0012631,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9510,
		"amount": 0.26393544,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9509.00000032,
		"amount": 0.32007665,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9500.98991003,
		"amount": 0.078,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9500.10101101,
		"amount": 0.00410454,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9500.1,
		"amount": 0.03286508,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9500.0005,
		"amount": 0.1,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "buy",
		"price": 9500.00000005,
		"amount": 0.05281407,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}],
	"asks": [{
		"side": "sell",
		"price": 9651.00000003,
		"amount": 0.08545011,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9651.95399999,
		"amount": 0.03086992,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9652.95399999,
		"amount": 0.74820391,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9655,
		"amount": 0.40400592,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9682,
		"amount": 0.01343342,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9697.99999998,
		"amount": 0.08350378,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9698,
		"amount": 0.124566,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9699,
		"amount": 0.19876424,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9699.00000009,
		"amount": 0.005,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9700,
		"amount": 0.50872607,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9700.64999999,
		"amount": 0.01773278,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9700.65000002,
		"amount": 0.01201113,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9710,
		"amount": 0.00218313,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9719.99999999,
		"amount": 1.765,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9720,
		"amount": 0.57894413,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9720.65,
		"amount": 0.02377453,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9723.65,
		"amount": 0.03580527,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9725.86365453,
		"amount": 0.47023552,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9725.86365454,
		"amount": 0.00097155,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9729,
		"amount": 0.54094875,
		"timestamp": 1512117867566,
		"datetime": "Dec 5 2017, 01:44:27:566 AM"
	}, {
		"side": "sell",
		"price": 9729.00000009,
		"amount": 0.0939809,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9730,
		"amount": 0.19532376,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9731,
		"amount": 4.60383498,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9732.48331974,
		"amount": 0.16012455,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9733.11227424,
		"amount": 0.30930419,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9735,
		"amount": 0.03705053,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9738.64499995,
		"amount": 0.00261986,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9739.7049745,
		"amount": 0.00089253,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9740,
		"amount": 0.11427991,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9742,
		"amount": 0.00103934,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9747,
		"amount": 0.04364144,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9748.00991003,
		"amount": 0.00033182,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9748.26750002,
		"amount": 0.002,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9749,
		"amount": 0.96494173,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9749.85766765,
		"amount": 0.01087,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9749.999,
		"amount": 1.32297468,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9750,
		"amount": 8.52147265,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9750.51000001,
		"amount": 0.00070435,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9752,
		"amount": 0.1,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9754,
		"amount": 0.19382349,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9755,
		"amount": 0.01568485,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9755.04,
		"amount": 0.08751113,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9760.4238481,
		"amount": 0.00073747,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9762.38978634,
		"amount": 0.02066872,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9763.98340952,
		"amount": 0.00125984,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9764.28584105,
		"amount": 0.15,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9765,
		"amount": 0.04167244,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9773,
		"amount": 0.005,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9774.1,
		"amount": 0.34258955,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}, {
		"side": "sell",
		"price": 9776.2186,
		"amount": 0.10597,
		"timestamp": 1512117867567,
		"datetime": "Dec 5 2017, 01:44:27:567 AM"
	}]
}


function bids (__id) {

    var margin = {top: 12, right: 0, bottom: 12, left: 12},
      width = 320 - margin.left - margin.right,
      height = 320 - margin.top - margin.bottom
    // set the ranges
    var x = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
    var y = d3.scaleLinear()
      .range([height, 0])
    // append the svg object to a div ID
    var svg = d3.select('#' + __id).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')')
    var prefixSum = function (arr) {
      var builder = function (acc, n) {
        var lastNum = acc.length > 0 ? acc[acc.length-1] : 0;
        acc.push(lastNum + n);
        return acc;
      };
      return _.reduce(arr, builder, []);
    }
    var data = []
    var __cum_data = []

    // get the data
    console.log("order_book",order_book.bids.length);
    var __order_book = order_book;
      data = []

      // create cumulative data array
      __cum_data = []
      for (var i = 0; i < __order_book.bids.length; i++) {
        __cum_data.push(__order_book.bids[i].amount)
      }
      var cum_data_array = prefixSum(__cum_data)

      // final data array
      for (var i = 0; i < __order_book.bids.length; i++) {
        data.push({
          idx: __order_book.bids[i].price,
          orders: cum_data_array[i]
        })
      }

      // reverse data for bids
      data = _.reverse(data)
      data.forEach(function (d) {
        d.orders = +d.orders
      })
      // Scale the range of the data in the domains
      x.domain(data.map(function (d) { return d.idx }))
      y.domain([0, d3.max(data, function (d) { return d.orders })])
      svg.selectAll('.bar-bids')
        .remove('rect')
      // append the rectangles for the bar chart
      svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('class', 'bar-bids')
        .attr('x', function (d) { return x(d.idx) })
        .attr('width', x.bandwidth())
        .attr('y', function (d) { return y(d.orders) })
        .attr('height', function (d) { return height - y(d.orders) })
        .append("g")
  }
  /** ASKS =============================================== */
  function asks (__id) {

    var margin = {top: 12, right: 12, bottom: 12, left: 0},
      width = 320 - margin.left - margin.right,
      height = 320 - margin.top - margin.bottom
    // set the ranges
    var x = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
    var y = d3.scaleLinear()
      .range([height, 0])
    // append the svg object to a div ID
    var svg = d3.select('#' + __id).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')')
    var prefixSum = function (arr) {
      var builder = function (acc, n) {
        var lastNum = acc.length > 0 ? acc[acc.length-1] : 0;
        acc.push(lastNum + n);
        return acc;
      };
      return _.reduce(arr, builder, []);
    }
    var data = []
    var __cum_data = []
    // get the data;
    // d3.json(order_book, function (__order_book) {
      data = []
      __cum_data = []
      var __order_book = order_book;
      console.log('__order_book asks', __order_book);
      for (var i = 0; i < __order_book.asks.length; i++) {
        __cum_data.push(__order_book.asks[i].amount)
      }

      // create cumulative data array
      var cum_data_array = prefixSum(__cum_data)

      // final data array
      for (var i = 0; i < __order_book.asks.length; i++) {
        data.push({
          idx: __order_book.asks[i].price,
          orders: cum_data_array[i]
        })
      }
      data.forEach(function (d) {
        d.orders = +d.orders
      })
      // Scale the range of the data in the domains
      x.domain(data.map(function (d) { return d.idx }))
      y.domain([0, d3.max(data, function (d) { return d.orders })])
      svg.selectAll('.bar-asks')
        .remove('rect')
      // append the rectangles for the bar chart
      svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('class', 'bar-asks')
        .attr('x', function (d) { return x(d.idx) })
        .attr('width', x.bandwidth())
        .attr('y', function (d) { return y(d.orders) })
        .attr('height', function (d) { return height - y(d.orders) })
    // })
  }

class App extends Component {

componentDidMount() {

      this.setState({
        bids:bids('bids'),
        asks:asks('asks')
      });
}
render() {

   return (
    <div>
    <div id="bids" className="depth-chart"> </div>
    <div id="asks" className="depth-chart"> </div>
    </div>
     );
   }
}
export default App;
