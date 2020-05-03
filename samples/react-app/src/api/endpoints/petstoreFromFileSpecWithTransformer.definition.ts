/*
 * Generated by orval v2.1.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { AxiosPromise } from 'axios';
import {
  Pet,
  Pets,
  listPetsParams,
} from '../model';

export interface SwaggerPetstore {
  // List all pets
  listPets(
    params?: listPetsParams,
    version?: number,
  ): AxiosPromise<Pets>;
  // Create a pet
  createPets(
    version?: number,
  ): AxiosPromise<unknown>;
  // Info for a specific pet
  showPetById(
    petId: string,
    testId: string,
    version?: number,
  ): AxiosPromise<Pet>;
}