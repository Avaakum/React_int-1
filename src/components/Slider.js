import React, { Component } from 'react';

import Slide_1 from '../img/1.jpg';
import Slide_2 from '../img/2.jpg';
import Slide_3 from '../img/3.jpg';
import Slide_4 from '../img/4.jpg';

class Slider extends React.Component {
	//Используем свойство конструктор
	constructor(props) {
		//Далее используем метод "супер", кот. позволяет одной командой вызвать
		//родительский конструктор, и должен указан первым в списке
		super(props);
		//props менять динмически нельзя - исп-ся только для чтения
		//нужно задать специальный массив для динмического изменения компонентов
		this.state = {
			//задаем массив
			slides: [
				{
					eachSlide: `url(${Slide_1})` //кладем сюда слайды через интерполяцию
				},
				{
					eachSlide: `url(${Slide_2})`
				},
				{
					eachSlide: `url(${Slide_3})`
				},
				{
					eachSlide: `url(${Slide_4})`
				}
			],
			//автоперелистывание, номер активного слайда, максимальное кол-во слайдов
			autoplay: false,
			active: 0,
			max: 0
		}
		//пишем зависимости тут. Привязывыаем к конструктору методы, которые
		//создаем далее
		this.state.max = this.state.slides.length;
		this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
		this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
		this.nextOne = this.nextOne.bind(this);
		this.prevOne = this.prevOne.bind(this);
	}
	//метод при появлении слайда на странице
	componentDidMount() {
		//переменная, содерж. Id нашего таймера, задаем интервал 3с через стрелочную функцию
		this.interval = setInterval(() => this.intervalBetweenSlides(), 3000 )
	}

	//метод, при исчесзновении слайда со страницы
	componentWillUnmount() {
		clearInterval(this.interval)
	}

	//метод, задающий интервал между переключениями слайдов
	intervalBetweenSlides() {
		if(this.state.autoplay === true) {
			if(this.state.active === this.state.max - 1) {
				this.state.active = 0
			} else {
				this.state.active++
			}

			this.setState({
				active: this.state.active
			})
		}
		//После задания этих трех методов, если будет включено автопереключение
		//то, слайды будут переключаться самостоятельно
	}
	//Теперь задаем метод, который включает само переключение
	toggleAutoPlay() {
		this.setState({
			autoplay: !this.state.autoplay
		})
	}

	//Задаем методы для переключения по стрелочкам
	//следующий слайд
	nextOne() {
		(this.state.active < this.state.max - 1) ?
		this.setState({
			active: this.state.active + 1 //или используем декремент ++
		}) :
		this.setState({
			active: 0
		})
	}
	//я так понимаю мы использовали сокращенную версию условия
	// if else

	//теперь предыдущий слайд по аналогии
	prevOne() {
		(this.state.active > 0) ?
		this.setState({
			active: this.state.active - 1 //или используем декремент --
		}) :
		this.setState({
			active: this.state.max - 1
		})
	}

	//У реакта есть собственный кэш и поэтому он не обновляет всю страницу,
	//а лишь отдельные элементы по надобности
	//делаем метод для точки активного слайда
	dots(index,event) {
		this.setState({
			active: index
		})
	}

	isActive(value) {
		if(this.state.active === value) {
			return 'active'
		}
	}

	//Тут видимо будет показан еще один способ задавать стили CSS
	// прямо через методы
	//делаем метод, что-бы наш слайдер зависел только от JS, и меньше от CSS
	//Надо, чтобы наш слайдер подстравался под количество слайдов в нем
	// и была анимация при переключении

	setSliderStyles() {

		const transition = this.state.active * - 100/this.state.slides.length 
		//при помощи этой переменной мы узнаем на сколько нужно будет сместить
		//наш слайдер по горизонтали

		return {
			width: (this.state.slides.length * 100) + '%',
			transform: `translateX(${transition}%)`
			// transform: 'translateX(' + transition + '%)'// - типо всё работает, но запись не красивая
		}
	}

	
	renderSlides() {
		const transition = 100/this.state.slides.length + "%"
		//задает ширину слайда

		return this.state.slides.map((item,index) => (
			<div
				className='each-slide'
				key = {index}
				style = {{backgroundImage: item.eachSlide, width: transition}}>
			</div>
		))
	}
	//при вызове этого метода он берет наш массив слайдов, который мы задали
	//в самом начале(уже с нашими картинками) и создает новый массив, кот. 
	//состоит из блоков, который имеет заданные выше аттрибуты, включая стили аттр.
	//"style", в который мы записываем картинку и ширину нашего слайда
	renderDots() {
		return this.state.slides.map((item,index) => (
				<li
				className={this.isActive(index) + ' dots'}
				//здесь присваем точке, которая соответствует используемому слайду
				//класс active
				key={index}
				ref="dots"
				onClick={this.dots.bind(this,index)}>
					<a>&#9679;</a>
				</li>
			))
	}
	renderPlayStop() {
		let playStop;


		if(this.state.autoplay) {
			playStop = <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
									<path d='M0 0h24v24H0z' fill='none'/>
									<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
								 </svg>;
		} else {
			playStop = <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
							    <path d='M0 0h24v24H0z' fill='none'/>
							    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
								 </svg>;
		}
		return playStop
	}
	renderArrows(){
		return (
				<div>
					<button
						type="button"
						className="arrows prev"
						onClick={this.prevOne}>
						<svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
					    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
					    <path d='M0 0h24v24H0z' fill='none'/>
						</svg>
					</button>

					<button
						type="button"
						className="arrows next"
						onClick={this.nextOne}>
						<svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
						    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
						    <path d='M0 0h24v24H0z' fill='none'/>
						</svg>
					</button>
				</div>
			)
	}

	//глобальный метод для всего нашего класса
	//тут мы берем стили, которые мы задавали для слайдера выше
	//в методе setSliderStyles и в фигурных скобках, в которых может быть
	// по истине всё что угодно, и браузер всё равно поймет
	render() {
		return(

			<div className="slider">
				<div
				className="wrapper"
				style={this.setSliderStyles()}>
				{this.renderSlides()}
				</div>

				{this.renderArrows()}

				<ul className="dots-container">
					{this.renderDots()}
				</ul>

				<a
				className="toggle-play"
				onClick={this.toggleAutoPlay}>
					{this.renderPlayStop()}
				</a>
			</div>
			)
	}
}

export default Slider



















