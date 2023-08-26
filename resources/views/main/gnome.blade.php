@extends('layout.app')
@section('content')
<style>
.modal.modal-fullscreen .modal-dialog {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  max-width: none; 
}

.modal.modal-fullscreen .modal-content {
  height: auto;
  height: 100vh;
  border-radius: 0;
  border: none; 
}

.modal.modal-fullscreen .modal-body {
  overflow-y: auto; 
}
</style>
    <div class="container border-container mt-3">
      <div class="row">
        <div id="gnome-diagram" class="col-md-10 col-sm-12 diagram-body">
          
        </div>
        <div class="side-menu col-md-2 col-sm-12 px-0" >
         
          <div id="gnome-menu" class="scrollable">
          
          </div>
          <div class="form-group float-right mr-4">
              <button class="small-btn-primary" onClick="done()">Done</button>
          </div>
        </div>

      <!-- Bootstrap Modal -->
      <div id="gnomeModal" class="modal" tabindex="-1" role="dialog"  data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3>Report</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div id="modalGnomeHeader"></div>
              <div id="personField" >
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bootstrap Modal -->
      <div id="traitModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-group">
                  <label for="traitSelect">Trait</label>
                  <select class="form-control" id="trait_header">
                      <option value="Sickle Cell Disease">Sickle Cell Disease</option>
                      <option value="Hemophilia Disease">Hemophilia Disease</option>
                  </select>
              </div>
              <div class="form-group">
                <label for="nameInput">Gene</label>
                <input type="text" class="form-control" id="gene_header" placeholder="Enter Gene">
              </div>
              <div class="form-group float-right">
                  <button class="small-btn-primary" onClick=saveHeader()>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Bootstrap Modal -->
      <div id="patternModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3>Pattern</h3>
            </div>
            <div class="modal-body">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="pattern" id="pattern1" value="Autosomal Dominant">
                <label class="form-check-label" for="pattern1">
                  Autosomal Dominant
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="pattern" id="pattern2" value="Autosomal Recessive" checked>
                <label class="form-check-label" for="pattern2">
                  Autosomal Recessive
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="pattern" id="pattern3" value="X-linked Dominant">
                <label class="form-check-label" for="pattern2">
                    X-linked Dominant
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="pattern" id="pattern4" value="X-linked Recessive">
                <label class="form-check-label" for="pattern2">
                    X-linked Recessive
                </label>
              </div>
              <div class="form-group float-right">
                  <button class="small-btn-primary" onClick=savePattern()>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Script Modal -->
      <div id="scriptModal" class="modal modal-fullscreen" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3>Script</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div id="script"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection
@section('scripts')
<script src="{{ asset('js/main/card_generation.js')}}"></script>
<script src="{{ asset('js/main/diagram.js')}}"></script>
<script src="{{ asset('js/main/modal_menu_generate.js')}}"></script>
<script src="{{ asset('js/main/modal_header.js')}}"></script>
<script src="{{ asset('js/main/init_global.js')}}"></script>
<script src="{{ asset('js/main/script.js')}}"></script>
@endsection
