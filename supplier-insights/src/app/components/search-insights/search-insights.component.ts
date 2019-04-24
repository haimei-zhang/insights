import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'supplier-insights-search-insights',
  templateUrl: './search-insights.component.html',
  styleUrls: ['./search-insights.component.scss']
})
export class SearchInsightsComponent implements OnInit {

  minHeight = '180px';

  constructor() {
  }

  ngOnInit() {
  }

  initWeeklySearchesChart(): any {
    return {
      title: 'Weekly Searches - Your Network',
      chartId: 'weekly-searches-chart',
      height: '400px',
      legend: ['All Searches', 'Best Performing Supplier - Products on First Page', 'Searches where your product was returned in search results', 'Best Performing Supplier - Products First in Results', 'Searches where your product was first result'],
      xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [{
        name: 'All Searches',
        stack: 'total',
        areaStyle: {},
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
        type: 'line'
      },
        {
          name: 'Best Performing Supplier - Products on First Page',
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
          areaStyle: {},
          stack: 'total',
          type: 'line'
        },
        {
          name: 'Searches where your product was returned in search results',
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
          areaStyle: {},
          stack: 'total',
          type: 'line'
        },
        {
          name: 'Best Performing Supplier - Products First in Results',
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
          areaStyle: {},
          stack: 'total',
          type: 'line'
        },
        {
          name: 'Searches where your product was first result',
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
          areaStyle: {},
          stack: 'total',
          type: 'line'
        }]
    };
  }

  initTypeOfSearchChart(): any {
    return {
      title: 'Type of Search',
      height: '550px',
      chartId: 'type-of-search-chart',
      legend: ['Browse by Category','Browse by Supplier','Clicked Manufacturer Part Number Link','Related Product Search','Standard Search'],
      series: [{
        name: 'Browse by Category',
        value: Math.random() * 1000
      },{
        name: 'Browse by Supplier',
        value: Math.random() * 1000
      },{
        name: 'Clicked Manufacturer Part Number Link',
        value: Math.random() * 1000
      },{
        name: 'Related Product Search',
        value: Math.random() * 1000
      },{
        name: 'Standard Search',
        value: Math.random() * 1000
      }]
    };
  }

  initSortByUsageChart(): any {
    return {
      title: 'Sort by Usage',
      height: '550px',
      chartId: 'sort-by-usage-chart',
      legend: ['Catalogue No. - Ascending','Description - Ascending','Manufacturer Part No. - Ascending','Pack Size - Ascending','Price - Ascending', 'Supplier Name - Ascending', 'Only view results with an image', 'Filter by Preferred', 'Catalogue No. - Descending', 'Description - Descending', 'Manufacturer Part No. - Descending', 'Pack Size - Descending', 'Price - Descending', 'Supplier Name - Descending', 'Hide POA Prices'],
      series: [{
        name: 'Catalogue No. - Ascending',
        value: Math.random() * 1000
      },{
        name: 'Description - Ascending',
        value: Math.random() * 1000
      },{
        name: 'Manufacturer Part No. - Ascending',
        value: Math.random() * 1000
      },{
        name: 'Pack Size - Ascending',
        value: Math.random() * 1000
      },{
        name: 'Supplier Name - Ascending',
        value: Math.random() * 1000
      },{
        name: 'Only view results with an image',
        value: Math.random() * 1000
      },{
        name: 'Filter by Preferred',
        value: Math.random() * 1000
      },{
        name: 'Catalogue No. - Descending',
        value: Math.random() * 1000
      },{
        name: 'Description - Descending',
        value: Math.random() * 1000
      },{
        name: 'Manufacturer Part No. - Descending',
        value: Math.random() * 1000
      },{
        name: 'Pack Size - Descending',
        value: Math.random() * 1000
      },{
        name: 'Price - Descending',
        value: Math.random() * 1000
      },{
        name: 'Supplier Name - Descending',
        value: Math.random() * 1000
      },{
        name: 'Hide POA Prices',
        value: Math.random() * 1000
      }]
    };
  }

  initSearchFilterUsageChart(): any {
    return {
      title: 'Search Filter Usage',
      height: '550px',
      chartId: 'search-filter-usage-chart',
      legend: ['Filter by Supplier','Filter by Category'],
      series: [{
        name: 'Filter by Supplier',
        value: Math.random() * 1000
      },{
        name: 'Filter by Category',
        value: Math.random() * 1000
      }]
    };
  }

  changePage(page, execute): void {
    console.log(page);
  }

  setPageSize(page): void {
    console.log(page)
  }

}
