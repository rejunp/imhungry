import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            center: {
                lat: props.lat,
                lng: props.lng,
            },
            zoom: props.zoom,
            map: null,
            style: props.style,
        }
    }

    getPlatform() {
        return new window.H.service.Platform(this.state);
    }

    getMap(container, layers, settings) {
        return new window.H.Map(container, layers, settings);
    }

    getEvents(map) {
        return new window.H.mapevents.MapEvents(map);
    }

    getBehavior(events) {
        return new window.H.mapevents.Behavior(events);
    }

    getUI(map, layers) {
        return new window.H.ui.UI.createDefault(map, layers);
    }

    componentDidMount() {
        this.platform = this.getPlatform();

        var layers = this.platform.createDefaultLayers();
        var element = document.getElementById('here-map');
        this.map = this.getMap(element, layers.normal.map, {
            center: this.state.center,
            zoom: this.state.zoom,
        });

        var events = this.getEvents(this.map);
        // eslint-disable-next-line
        var behavior = this.getBehavior(events);
        // eslint-disable-next-line
        var ui = this.getUI(this.map, layers);
    }

/*    shouldComponentUpdate(props, state) {
        this.changeTheme(props.theme, props.style);
        return false;
    }

    changeTheme(theme, style) {
        var tiles = this.platform.getMapTileService({'type': 'base'});
        var layer = tiles.createTileLayer(
            'maptile',
            theme,
            256,
            'png',
            {'style': 'flame'}
        );
        this.map.setBaseLayer(layer);
    }*/

    render() {
        return (
            <div id="here-map" style={{width: '100%', height: '400px', background: 'grey' }} />
        );
    }
}

export default Map;
