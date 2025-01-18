import { Request, Response } from 'express'
import { tourService } from './tour.service'

const createTour = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const result = tourService.createTour(body)

    res.send({
      success: true,
      message: 'Tour created successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong!!!',
      error,
    })
  }
}

const getTours = async (req: Request, res: Response) => {
  try {
    const result = tourService.getTours()

    res.send({
      success: true,
      message: 'Tour getting successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong!!!',
      error,
    })
  }
}

const getSingleTours = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId

    const result = tourService.getSingleTour(userId)

    res.send({
      success: true,
      message: 'Tour getting successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong!!!',
      error,
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const body = req.body

    const result = await tourService.updateTour(userId, body)

    res.send({
      success: true,
      message: 'Tour updated successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong!!!',
      error,
    })
  }
}

const deleteTour = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId

    const result = await tourService.deleteTour(userId)

    res.send({
      success: true,
      message: 'Tour Deleted successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong!!!',
      error,
    })
  }
}

export const tourController = {
  createTour,
  getTours,
  getSingleTours,
  updateTour,
  deleteTour,
}
