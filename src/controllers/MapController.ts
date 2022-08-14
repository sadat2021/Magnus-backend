import { Request, Response } from "express";
import * as turf from "@turf/turf";
import _ from "lodash";

const GenerateRandomLocations = (req: Request, res: Response) => {
  try {
    // get bounds and countOfEdges from body
    const { bounds, countOfEdges } = req.body;

    // find min and max of lng and lat
    const cordinateWithMinLng: any = _.minBy(bounds, "lng");
    const cordinateWithMaxLng: any = _.maxBy(bounds, "lng");
    const cordinateWithMinLat: any = _.minBy(bounds, "lat");
    const cordinateWithMaxLat: any = _.maxBy(bounds, "lat");

    // create a square around the bounds
    const boundsArr: any[] = [];
    bounds.forEach((p: { lng: number; lat: number }) => {
      boundsArr.push([p.lng, p.lat]);
    });
    const polygon = turf.polygon([boundsArr]);
    //create random point polygon
    const responsePolygon = [];
    let index = 0;
    while (index < countOfEdges) {
      const randomLng =
        Math.random() * (cordinateWithMaxLng.lng - cordinateWithMinLng.lng) +
        cordinateWithMinLng.lng;
      const randomLat =
        Math.random() * (cordinateWithMaxLat.lat - cordinateWithMinLat.lat) +
        cordinateWithMinLat.lat;
      const point = turf.point([randomLng, randomLat]);

      //check random point inside the bound
      if (turf.inside(point, polygon)) {
        responsePolygon.push({ lng: randomLng, lat: randomLat });
        index++;
      }
    }
    // response
    return res.status(200).json({
      polygon: responsePolygon,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};

const MapController = {
  GenerateRandomLocations,
};
export default MapController;
