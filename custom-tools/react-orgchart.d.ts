declare module '@dabeng/react-orgchart' {
    export = OrganizationChart;

    function OrganizationChart(props: IOrganizationChartProps): JSX.Element;

    interface IOrganizationChartProps {
        ref?: any,                  // A ref for the orgchart instance.
        chartClass?: string,        // A css class to apply to the chart DOM node.
        containerClass?: string,    // Add an optional extra class name to .orgchart-container It could end up looking like class="orgchart-container xxx yyy".
        collapsible?: boolean,      // Allows expanding/collapsing the nodes.
        datasource: object,         // datasource usded to build out structure of orgchart.
        draggable?: boolean,        // Allows dragging/dropping the nodes to the hierarchy of chart.
        multipleSelect?: boolean,   // If true, user can select multiple nodes by mouse clicking.
        NodeTemplate?: any,		// A Component that provides the node content Markup. This is a useful prop when you want to use your own styles and markup to create a custom orgchart node.
        onClickChart?: Function,	// A callback fired when the orgchart is clicking.
        onClickNode?: Function,		// A callback fired when the node is clicking.
        pan?: boolean,	            // If true, the chart can be panned.
        zoom?: boolean,	            // If true, the chart can be zoomed.
        zoominLimit?: number,	    // Default: 7 User can zoom the chart at different scales(0.5~7).
        zoomoutLimit?: number,	    // Default: 0.5 User can zoom the chart at different scales(0.5~7).
    }
}

// declare module '/custom-tools/lib/dabeng-react-orgchart/ChartContainer.js' {
//     export = OrganizationChart;

//     function OrganizationChart(props: IOrganizationChartProps): JSX.Element;

//     interface IOrganizationChartProps {
//         ref?: any,                  // A ref for the orgchart instance.
//         chartClass?: string,        // A css class to apply to the chart DOM node.
//         containerClass?: string,    // Add an optional extra class name to .orgchart-container It could end up looking like class="orgchart-container xxx yyy".
//         collapsible?: boolean,      // Allows expanding/collapsing the nodes.
//         datasource: object,         // datasource usded to build out structure of orgchart.
//         draggable?: boolean,        // Allows dragging/dropping the nodes to the hierarchy of chart.
//         multipleSelect?: boolean,   // If true, user can select multiple nodes by mouse clicking.
//         NodeTemplate?: any,		// A Component that provides the node content Markup. This is a useful prop when you want to use your own styles and markup to create a custom orgchart node.
//         onClickChart?: Function,	// A callback fired when the orgchart is clicking.
//         onClickNode?: Function,		// A callback fired when the node is clicking.
//         pan?: boolean,	            // If true, the chart can be panned.
//         zoom?: boolean,	            // If true, the chart can be zoomed.
//         zoominLimit?: number,	    // Default: 7 User can zoom the chart at different scales(0.5~7).
//         zoomoutLimit?: number,	    // Default: 0.5 User can zoom the chart at different scales(0.5~7).
//     }
// }