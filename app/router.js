import { CasesController } from "./controllers/CasesController.js";


export const router = [
  {
    path: '',
    controller: CasesController,
    view: `
    <div class="container-fluid">
      <div class="row pt-3">
        <div class="col-12 text-center">
          <p class="fs-4 text-secondary" id="caseCount"># CASES ON FILE</p>
        </div>
      </div>
      <div class="row p-5" id="cases">

      </div>
      <div class="row p-5" id="cases">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small">
            ...
            
          </div>
        </div>
      </div>

    </div>
    `
  }
]