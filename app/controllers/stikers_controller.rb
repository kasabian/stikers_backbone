class StikersController < ApplicationController
  # GET /stikers
  # GET /stikers.json
  def index
    @stikers = Stiker.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @stikers }
    end
  end

  # GET /stikers/1
  # GET /stikers/1.json
  def show
    @stiker = Stiker.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @stiker }
    end
  end

  # GET /stikers/new
  # GET /stikers/new.json
  def new
    @stiker = Stiker.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @stiker }
    end
  end

  # GET /stikers/1/edit
  def edit
    @stiker = Stiker.find(params[:id])
  end

  # POST /stikers
  # POST /stikers.json
  def create
    @stiker = Stiker.new(params[:stiker])

    respond_to do |format|
      if @stiker.save
        format.html { redirect_to @stiker, notice: 'Stiker was successfully created.' }
        format.json { render json: @stiker, status: :created, location: @stiker }
      else
        format.html { render action: "new" }
        format.json { render json: @stiker.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /stikers/1
  # PUT /stikers/1.json
  def update
    @stiker = Stiker.find(params[:id])

    respond_to do |format|
      if @stiker.update_attributes(params[:stiker])
        format.html { redirect_to @stiker, notice: 'Stiker was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @stiker.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stikers/1
  # DELETE /stikers/1.json
  def destroy
    @stiker = Stiker.find(params[:id])
    @stiker.destroy

    respond_to do |format|
      format.html { redirect_to stikers_url }
      format.json { head :no_content }
    end
  end
end
