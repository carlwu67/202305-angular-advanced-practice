import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from './loading.service';
import { delay, finalize } from 'rxjs';

export const apiLoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.loading();
  return next(req).pipe(
    delay(1000),
    // tap({
    //   error: () => {
    //     loadingService.unloading();
    //   },
    //   complete: () => {
    //     loadingService.unloading();
    //   }
    // }),
    finalize(() => {
      loadingService.unloading();
    })
  );
};
